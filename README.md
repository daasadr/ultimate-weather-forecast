# Aplikace předpovědi počasí

Tato jednoduchá webová aplikace zobrazuje předpověď počasí na příštích 5 dní pro město vybrané uživatelem. Aplikace využívá OpenWeather API pro získávání dat o počasí.

## Funkce

- Vyhledávání měst s našeptávačem
- Zobrazení 5denní předpovědi počasí pro vybrané město
- Responzivní design

## Technologie

- React
- TypeScript
- SCSS
- OpenWeather API

## Spuštění aplikace

1. Naklonujte repozitář:
   ```
   git clone https://github.com/daasadr/ultimate-weather-forecast.git
   ```

2. Nainstalujte závislosti:
   ```
   npm install
   ```

3. Vytvořte soubor `.env` v kořenovém adresáři projektu a přidejte svůj API klíč pro OpenWeather:
   ```
   REACT_APP_OPEN_WEATHER_KEY=váš_api_klíč
   ```

4. Spusťte aplikaci:
   ```
   npm start
   ```

5. Otevřete `http://localhost:3000` ve vašem prohlížeči.

## Podporované prohlížeče

Aplikace by měla fungovat ve všech moderních prohlížečích, včetně:

- Google Chrome (poslední 2 verze)
- Mozilla Firefox (poslední 2 verze)
- Microsoft Edge (poslední 2 verze)
- Safari (poslední 2 verze)

## Struktura projektu

Aplikace je rozdělena do několika klíčových modulů:

- `src/containers/`: Obsahuje React komponenty
  - `ForecastTable.tsx`: Zobrazuje tabulku s 5denní předpovědí
  - `SearchCityField.tsx`: Implementuje vyhledávací pole s našeptávačem
  - `InputComponent.tsx`: Komponenta pro vstupní pole
  - `Suggestions.tsx`: Zobrazuje návrhy měst
- `services/`:
  - `weatherService.ts`: Obsahuje funkce pro komunikaci s OpenWeather API
- `utils/`:
  - `citySearch.ts`: Implementuje logiku vyhledávání měst
  - `weatherUtils.ts`: Pomocné funkce pro zpracování dat o počasí
- `GlobalContext/`: Implementace globálního kontextu pro sdílení stavu aplikace

## Poznámky k vývoji

- Aplikace používá React Hooks pro správu stavu a side-effectů
- Pro stylování je použito SCSS
- Data o městech jsou načítána z lokálního JSON souboru (`city.list.json`)

