import React from "react";

type ModelType = {
  name: string;
  description: string;
  speed: string;
  features: string[];
  icon: string;
  color: string;
  link: string;
};

interface ModelCardProps {
  model: ModelType;
  price?: string;
  weight?: string;
  range?: string;
}

export function ModelCard({ model, price, weight, range }: ModelCardProps) {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <article
      className={
        `self-start bg-white rounded-3xl p-6 shadow-lg border border-gray-100 overflow-hidden flex flex-col transition-all duration-300 ${showMore ? 'scale-105 shadow-2xl z-10' : 'hover:shadow-2xl hover:scale-105'}`
      }
      style={{
        position: showMore ? 'relative' : undefined,
        zIndex: showMore ? 20 : undefined,
        transition: 'height 0.3s cubic-bezier(0.4,0,0.2,1)',
        height: showMore ? 'auto' : undefined
      }}
    >
      <div className="text-4xl mb-4">{model.icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{model.name}</h3>
      <p className="text-gray-600 mb-4 flex-1">{model.description}</p>
      <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: `${model.color}10`, borderLeft: `4px solid ${model.color}` }}>
        <p className="font-bold text-gray-900">{model.speed}</p>
      </div>
      <div className="mb-6">
        <ul className="space-y-2">
          {price && <li className="flex items-start gap-2 text-sm text-gray-700"><span className="font-bold">Pris:</span> <span>{price.replace("Pris fra ","")}</span></li>}
          {weight && <li className="flex items-start gap-2 text-sm text-gray-700"><span className="font-bold">Vægt:</span> <span>{weight.replace("Vægt: ","")}</span></li>}
          {range && <li className="flex items-start gap-2 text-sm text-gray-700"><span className="font-bold">Rækkevidde:</span> <span>{range.replace("Rækkevidde: ","")}</span></li>}
        </ul>
        {!showMore && (
          <button
            className="mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold hover:bg-blue-200 transition-all"
            onClick={() => setShowMore(true)}
          >
            Se mere
          </button>
        )}
        <div
          style={{
            maxHeight: showMore ? 600 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.5s cubic-bezier(.68,-0.55,.27,1.55)',
          }}
        >
          {showMore && (
            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-500 mb-3 uppercase">Flere detaljer</p>
              <ul className="space-y-2">
                {model.features.filter((f: string) => f !== price && f !== weight && f !== range).map((feature: string) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-xl leading-none mt-0.5" style={{ color: model.color }}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className="mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                onClick={() => setShowMore(false)}
              >
                Vis mindre
              </button>
            </div>
          )}
        </div>
      </div>
      <a
        href={model.link}
        target="_blank"
        rel="noreferrer"
        className="w-full inline-block text-center py-3 px-4 rounded-xl font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
        style={{ backgroundColor: model.color }}
      >
        Se priser
      </a>
    </article>
  );
}
