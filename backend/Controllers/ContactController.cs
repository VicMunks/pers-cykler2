using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;
using System.Threading.Tasks;
using System;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        public record ContactRequest(string Name, string Email, string Subject, string Message);

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ContactRequest req)
        {
            Console.WriteLine("\n========================================");
            Console.WriteLine("[ContactController.Post] REQUEST RECEIVED!");
            Console.WriteLine($"[ContactController.Post] Name: {req.Name}");
            Console.WriteLine($"[ContactController.Post] Email: {req.Email}");
            Console.WriteLine($"[ContactController.Post] Subject: {req.Subject}");
            Console.WriteLine("========================================\n");

            try
            {
                // read configuration from environment variables
                var smtpHost = Environment.GetEnvironmentVariable("SMTP_HOST") ?? "smtp.gmail.com";
                var smtpPort = int.TryParse(Environment.GetEnvironmentVariable("SMTP_PORT"), out var p) ? p : 587;
                var smtpUser = Environment.GetEnvironmentVariable("SMTP_USER");
                var smtpPass = Environment.GetEnvironmentVariable("SMTP_PASS");
                var toAddress = Environment.GetEnvironmentVariable("CONTACT_TO") ?? "victor.munk1234@gmail.com";

                Console.WriteLine($"[ContactController] SMTP_HOST: {smtpHost}");
                Console.WriteLine($"[ContactController] SMTP_PORT: {smtpPort}");
                Console.WriteLine($"[ContactController] SMTP_USER: {smtpUser}");
                Console.WriteLine($"[ContactController] SMTP_PASS: {(string.IsNullOrEmpty(smtpPass) ? "NOT SET" : "***")}");
                Console.WriteLine($"[ContactController] CONTACT_TO: {toAddress}");

                // if no credentials provided, just log
                if (string.IsNullOrWhiteSpace(smtpUser) || string.IsNullOrWhiteSpace(smtpPass))
                {
                    Console.WriteLine("[ContactController] SMTP credentials missing. Message would be:");
                    Console.WriteLine($"From: {smtpUser}\nTo: {toAddress}\nSubject: {req.Subject}\n\nName: {req.Name}\nEmail: {req.Email}\n\nMessage: {req.Message}");
                    return Ok(new { success = true, info = "no-smtp-credentials" });
                }

                // Build mail message: Gmail requires From address to match the SMTP_USER
                var mail = new MailMessage();
                mail.From = new MailAddress(smtpUser, "Pers Cykler Kontaktformular");
                mail.To.Add(toAddress);
                if (!string.IsNullOrWhiteSpace(req.Email))
                {
                    mail.ReplyToList.Add(new MailAddress(req.Email, req.Name));
                }
                mail.Subject = string.IsNullOrWhiteSpace(req.Subject) ? "Kontakt fra hjemmeside" : req.Subject;
                mail.Body = $"Navn: {req.Name}\nEmail: {req.Email}\n\nBesked:\n{req.Message}";

                // Send via SMTP
                using var smtp = new SmtpClient(smtpHost, smtpPort)
                {
                    EnableSsl = true,
                    Credentials = new System.Net.NetworkCredential(smtpUser, smtpPass),
                    Timeout = 10000
                };

                Console.WriteLine($"[ContactController] Sending email via {smtpHost}:{smtpPort}...");
                await smtp.SendMailAsync(mail);
                Console.WriteLine("[ContactController] Email sent successfully!");
                return Ok(new { success = true });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[ContactController] Error: {ex.GetType().Name} - {ex.Message}");
                Console.WriteLine($"[ContactController] StackTrace: {ex.StackTrace}");
                return StatusCode(500, new { error = ex.Message, type = ex.GetType().Name });
            }
        }
    }
}
