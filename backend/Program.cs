var builder = WebApplication.CreateBuilder(args);

// Load environment variables from .env file
var dotenv = Path.Combine(Directory.GetCurrentDirectory(), "..", ".env");
Console.WriteLine($"[Program] Looking for .env at: {dotenv}");
Console.WriteLine($"[Program] File exists: {File.Exists(dotenv)}");

if (File.Exists(dotenv))
{
    var envCount = 0;
    foreach (var line in File.ReadAllLines(dotenv))
    {
        if (string.IsNullOrWhiteSpace(line) || line.StartsWith("#"))
            continue;
        var parts = line.Split('=', 2);
        if (parts.Length == 2)
        {
            var key = parts[0].Trim();
            var value = parts[1].Trim();
            if (!string.IsNullOrWhiteSpace(key))
            {
                Environment.SetEnvironmentVariable(key, value);
                Console.WriteLine($"[Program] Loaded env var: {key}");
                envCount++;
            }
        }
    }
    Console.WriteLine($"[Program] Loaded {envCount} environment variables from .env");
}
else
{
    Console.WriteLine("[Program] WARNING: .env file not found!");
}

builder.Services.AddOpenApi();
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

Console.WriteLine("[Program] Backend started at " + DateTime.Now);

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors("AllowLocalhost");
app.MapControllers();
app.UseHttpsRedirection();

app.Run();

