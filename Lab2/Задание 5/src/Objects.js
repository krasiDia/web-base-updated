/*
Если человек является женщиной (gender === 'female'),
удаляем свойство age, если оно есть.
Если человек является мужчиной (gender === 'male'),
добавляем income = 100000, если такого свойства нет.
*/
export function personUpdate(data) {
    if (data.gender === 'female') {
        delete data.age;
    } else if (data.gender === 'male') {
        if (!('income' in data)) {
            data.income = 100000;
        }
    }

    return data;
}

/*
Возвращаем общий список названий полей трёх объектов
в алфавитном порядке.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    return [
        ...new Set([
            ...Object.keys(obj1),
            ...Object.keys(obj2),
            ...Object.keys(obj3),
        ]),
    ].sort();
}

/*
Создаём count клонов объекта obj.
Каждый клон получает свой порядковый номер в поле id.
Вложенные объекты также копируются.
*/
export function objectClone(obj, count) {
    const result = [];

    for (let i = 0; i < count; i++) {
        const clone = structuredClone(obj);
        clone.id = i;
        result.push(clone);
    }

    return result;
}
