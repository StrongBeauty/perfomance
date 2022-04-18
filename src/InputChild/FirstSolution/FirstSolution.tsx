import {SeparateInput} from "./SeparateInput";
import {HighLoadComponent} from "../CommonExamples/HighLoadComponent";

export const FirstSolution = () => {

    return (
        <>
            {/* Стейт, который отвечает за value инпута был убран с родителя и перенесен\n' +
        '        в отдельный компонент с инпутом. Теперь родитель не ререндерится, а значит и тяжелый компонент находится в\n' +
        '        безопасности от лишней работы. */}
            <h3>Separate Input</h3>
            <SeparateInput />
            <HighLoadComponent />
        </>
    )
}
