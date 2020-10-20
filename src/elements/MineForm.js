import Checkbox from "@vkontakte/vkui/dist/components/Checkbox/Checkbox";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Textarea from "@vkontakte/vkui/dist/components/Textarea/Textarea";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import Select from "@vkontakte/vkui/dist/components/Select/Select";
import Radio from "@vkontakte/vkui/dist/components/Radio/Radio";
import React from "react";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Separator from "@vkontakte/vkui/dist/components/Separator/Separator";
import Multiselect from 'react-widgets/lib/Multiselect'
import 'react-widgets/dist/css/react-widgets.css';
// import 'react-widgets/lib/less/react-widgets.less';
// import 'react-widgets/lib/scss/react-widgets.scss';
import InfoRow from "@vkontakte/vkui/dist/components/InfoRow/InfoRow";

class MineForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            purpose: ''
        }

        this.addressItems = [
            { label: 'Почтовый индекс', name: 'zip' },
            { label: 'Страна', name: 'country' },
            { label: 'Город', name: 'city' }
        ];

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    }

    render() {
        const { email, purpose } = this.state;

        return (

            <div>


                <FormLayout>
                    <FormLayoutGroup top="Кто ты в РТУ МИРЭА?">
                        <Checkbox value="Студент">Студент(-ка)</Checkbox>
                        <Checkbox value="Сотрудник">Сотрудник(-ца)</Checkbox>
                        <Checkbox value="Выпускник">Выпускник(-ца)</Checkbox>
                        <Checkbox value="Не причастен">Не причастен(-на) к РТУ МИРЭА</Checkbox>
                    </FormLayoutGroup>


                    {/*<FormLayoutGroup>*/}
                    {/*{(isStudent || isGraduated) &&*/}
                    <Select top="Какой институт?">
                        <option value="ИТ">ИТ</option>
                        <option value="ИНТЕГУ">ИНТЕГУ</option>
                        <option value="Кибернетика">Кибернетика</option>
                        <option value="РТС">РТС</option>
                        <option value="ФТИ20">ФТИ (Стромынка, 20)</option>
                        <option value="ФТИ78">ФТИ (Проспект Вернадского, 78)</option>
                        <option value="КБСП">КБСП</option>
                        <option value="ИЭП">ИЭП</option>
                        <option value="ТХТ">ТХТ им. М.В. Ломоносова</option>
                        <option value="Колледж">Колледж</option>
                        {/*{isGraduated &&*/}
                        <option value="Другой">Другой</option>
                    </Select>

                    {/*<Select top = {isGraduated ? "Какой уровень образования?" : "Что закончил(-а) в РТУ МИРЭА?"}>*/}
                    <Select top = "Какой уровень образования?">
                        <option value="Колледж">Колледж</option>
                        <option value="Бакалавриат">Бакалавриат</option>
                        <option value="Специалитет">Специалитет</option>
                        <option value="Магистратура">Магистратура</option>
                        <option value="Аспирантура">Аспирантура</option>
                    </Select>

                    {/*{isStudent &&}*/}
                    <Select top="Какой курс?">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </Select>

                    {/*{isStudent &&}*/}
                    <FormLayoutGroup top="Форма обучения?">
                        <Radio name={"education_form"} value="Бюджетная">Бюджетная</Radio>
                        <Radio name={"education_form"} value="Платная">Платная</Radio>
                    </FormLayoutGroup>

                    {/*{isStudent &&}*/}
                    <Input top="Номер группы?" placeholder="ИКБО-01-19"/>


                    <Separator style={{ margin: '12px 0' }} />


                    <FormLayoutGroup top="Согласен(-на) получать важные объявления? Приказы, собрания и т.п.">
                        <Radio name="important"
                               defaultChecked
                               value = "Да"
                               required>
                            Да</Radio>
                    </FormLayoutGroup>

                    <FormLayoutGroup top="Какие социальные темы тебе интересны?">
                        <Checkbox value="Новости">Новости о жизни Университета</Checkbox>
                        <Checkbox value="Стипендии">Стипендии</Checkbox>
                        <Checkbox value="Общежития">Общежития</Checkbox>
                        <Checkbox value="Донорство">Донорство</Checkbox>
                        <Checkbox value="Академическая мобильность">Академическая мобильность: учёба заграницей и т.п.</Checkbox>
                    </FormLayoutGroup>

                    <FormLayoutGroup top="Какая внеучебная деятельность тебе интересна?">
                        <Checkbox value="Наука">Наука</Checkbox>
                        <Checkbox value="Саморазвитие">Саморазвитие: soft навыки</Checkbox>
                        <Checkbox value="Профессиональное">Профессиональное развитие по специальности</Checkbox>
                        <Checkbox value="Работа">Работа и стажировки</Checkbox>
                        <Checkbox value="Организация">Организация мероприятий</Checkbox>
                        <Checkbox value="Спорт">Спорт</Checkbox>
                        <Checkbox value="Киберспорт">Киберспорт</Checkbox>
                        <Checkbox value="Творчество">Творчество</Checkbox>
                        <Checkbox value="Медиа">Медиа: фото, видео, текст, дизайн</Checkbox>
                        <Checkbox value="Политика">Политика</Checkbox>
                        <Checkbox value="Путешествия">Путешествия</Checkbox>
                        <Checkbox value="Языки">Изучение иностранных языков</Checkbox>
                        <Checkbox value="Психология">Психология</Checkbox>
                        <Checkbox value="Отряды">Отряды: педагогические, профориентационный, МЧС</Checkbox>
                        <Checkbox value="Волонтёрство">Волонтёрство</Checkbox>
                        <Checkbox value="Настольные">Настольные игры</Checkbox>
                        <Checkbox value="Досуг">Досуг и развлечения</Checkbox>
                    </FormLayoutGroup>

                    <Textarea top="Кратко, есть ли и какие достижения у тебя в выбранных выше сферах?" />

                    {/*{isScienceProf &&}*/}
                    <FormLayoutGroup top="Какие форматы Научной и Профессиональной деятельности тебе интересны?">
                        <Checkbox value="Форумы">Конференции и форумы</Checkbox>
                        <Checkbox value="Соревнования">Хакатоны, олимпиады и иные соревнования</Checkbox>
                        <Checkbox value="Преподавание">Преподавать другим</Checkbox>
                        <Checkbox value="Бизнес">Предпринимательство, бизнес и ведение проектов</Checkbox>
                        <Checkbox value="Материалы">Профессиональные учебные материалы</Checkbox>
                        <Checkbox value="Научпоп">Научно-популярные материалы</Checkbox>
                    </FormLayoutGroup>

                    <Textarea top="Есть ли ещё какие сферы, тебе интересные?" />

                    <Separator style={{ margin: '12px 0' }} />

                    <InfoRow header={""}>
                        Важные оповещения будут приходить ежедневно в 20:00 по Москве.
                    </InfoRow>

                    <FormLayoutGroup top="А как часто тебе будет удобно получать рассылку по своим интересам?">
                        <Radio name="day_of_week" value={7} defaultChecked>Каждый день</Radio>
                        <Radio name="day_of_week" value={3}>Каждые два дня</Radio>
                        <Radio name="day_of_week" value={1}>Раз в неделю по
                            <Select disabled>
                                <option value={1}>понедельникам</option>
                                <option value={2}>вторникам</option>
                                <option value={3}>средам</option>
                                <option value={4}>четвергам</option>
                                <option value={5}>пятницам</option>
                                <option value={6}>субботам</option>
                                <option value={7}>воскресеньям</option>
                            </Select>
                        </Radio>
                    </FormLayoutGroup>

                    <Select top={"И в какое время?"} defaultValue={22}>
                        <option value={8}>8:00</option>
                        <option value={12}>12:30</option>
                        <option value={18}>18:00</option>
                        <option value={22} >22:00</option>
                    </Select>

                    <Multiselect top="Dfe"
                                 data={[
                                     'orange',
                                     'red',
                                     'blue',
                                     'purple'
                                 ]}/>

                    <Button mode="commerce" size="xl">Сохранить</Button>
                    <Button mode="destructive" size="xl">Отписаться</Button>
                </FormLayout>
            </div>

        );
    }
}
export default MineForm;