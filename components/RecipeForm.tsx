export default function RecipeForm() {
  return (
    <div id="new-recipe" className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-1 mb-3">
        <h2 className="font-bold text-2xl font-ebGaramond">
          Dodaj własny przepis
        </h2>
        <p className="font-beVietnamPro">Podziel się swoją pasją</p>
      </div>
      <form className="flex flex-col ">
        <div className="flex flex-col form-card p-5 rounded-lg mt-3">
          <h4 className="font-semibold text-lg mb-3 font-ebGaramond">
            Podstawowe informacje
          </h4>
          <label htmlFor="title" className="font-label-md text-label-md">
            Tytuł przepisu
          </label>
          <input
            name="title"
            type="text"
            className="text-input mb-2 font-body-md"
          />
          <label htmlFor="description" className="font-label-md text-label-md">
            Krótki opis
          </label>
          <textarea
            name="description"
            className="border-2 border-gray-100 rounded-xl mb-2 font-body-md p-2"
          />
          <div className="grid grid-cols-3 w-full gap-3">
            <span className="flex flex-col py-2 ">
              <label
                htmlFor="category"
                className="font-label-md text-label-md mb-1"
              >
                Kategoria
              </label>
              <select className="text-input h-11 w-full leading-none font-body-md px-2">
                <option value="sniadanie">Śniadanie</option>
                <option value="obiad">Obiad</option>
                <option value="kolacja">Kolacja</option>
                <option value="przekąska">Przekąska</option>
                <option value="drink">Drink</option>
              </select>
            </span>
            <span className="flex flex-col py-2  font-body-md">
              <label
                htmlFor="time"
                className="font-label-md text-label-md mb-1"
              >
                Czas przygotowania(min)
              </label>
              <input
                name="time"
                type="text"
                className="border-2 border-gray-100 rounded-xl px-2 w-full h-11 leading-none"
              />
            </span>
            <span className="flex flex-col py-2 ">
              <label
                htmlFor="level"
                className="font-label-md text-label-md mb-1"
              >
                Poziom trudności
              </label>
              <select
                name="level"
                className="text-input w-full h-11 px-2 leading-none font-body-md"
              >
                <option value="latwy">Łatwy</option>
                <option value="sredni">Średni</option>
                <option value="trudny">Trudny</option>
              </select>
            </span>
          </div>
        </div>
        <div className="form-card flex flex-col p-3 rounded-lg mt-3">
          <h4>Zdjecie główne</h4>
          <input type="file" />
        </div>
        <div className="form-card mt-3 p-3">
          <h4>Składniki</h4>
          <div className="flex flex-col">
            <div className="flex justify-start items-center gap-10">
              <input
                type="text"
                placeholder="Nazwa (np. mąka pszenna)"
                className="border-2 border-gray-200 p-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="Ilość (np.500g)"
                className="text-input"
              />
            </div>
            <button>Dodaj!</button>
          </div>
        </div>
        <div className="form-card p-3 mt-3">
          <h4>Kroki przygotowania</h4>
          <div>
            <input type="text" className="text-input" />
            <input type="text" className="text-input" />
            <button>Dodaj!</button>
          </div>
        </div>
        <div>
          <button>Opublikuj przepis</button>
          <button>Zapisz jako szkic</button>
        </div>
      </form>
    </div>
  );
}
