import Checkbox from "@vkontakte/vkui/dist/components/Checkbox/Checkbox";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Textarea from "@vkontakte/vkui/dist/components/Textarea/Textarea";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import Select from "@vkontakte/vkui/dist/components/Select/Select";
import Radio from "@vkontakte/vkui/dist/components/Radio/Radio";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Separator from "@vkontakte/vkui/dist/components/Separator/Separator";
import Multiselect from 'react-widgets/lib/Multiselect'

import InfoRow from "@vkontakte/vkui/dist/components/InfoRow/InfoRow";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";

import React, { useState, useEffect } from 'react';

import 'react-widgets/dist/css/react-widgets.css';
import SliderSwitch from "@vkontakte/vkui/dist/components/SliderSwitch/SliderSwitch";
import {FormItem} from "@vkontakte/vkui";
import Div from "@vkontakte/vkui/dist/components/Div/Div";


class MineForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            id_vk: '',

            is_student: false,
            is_worker: false,
            is_graduated: false,
            is_outsider: false,

            institution: '',
            level: '',
            grade: '',
            form: '',
            group: '',

            send_important: true,

            social_news: false,
            social_scholarships: false,
            social_dormitory: false,
            social_blood:false,
            social_mobility:false,

            interest_science:false,
            interest_selfdevelopment:false,
            interest_professional:false,
            interest_work:false,
            interest_organization:false,
            interest_sport:false,
            interest_cybersport:false,
            interest_art:false,
            interest_media:false,
            interest_politics:false,
            interest_travel:false,
            interest_languages:false,
            interest_psychology:false,
            interest_squad:false,
            interest_volunteer:false,
            interest_boardgames:false,
            interest_entertainment:false,

            achievements: '',

            science_conferences: false,
            science_competitions: false,
            science_teaching: false,
            science_business: false,
            science_materials: false,
            science_pop: false,

            another_interests:'',

            frequency: 7,
            week_day: 7,
            time: 22,

        }

        this.onChange = this.onChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
        this.onSwitchChange = this.onSwitchChange.bind(this);
        this.countInterests = this.countInterests.bind(this)

    }

    /*
    Пост
    Курс в инт
    Задублировать колледж



    */


    onChange = async (event) => {
        console.log(event.target)
        // await console.log("onChange: ", e.currentTarget)
        // await console.log(e.target)
        // const {name, value} = e.currentTarget;
        // await console.log(name,value)
        // await this.setState({[name]: value});
        // await console.log("onChange: ", this.state)

    }

    onInputChange = async (event) => {
        console.log(event.target)
        let name = event.target.name
        let value = document.getElementsByName(name)[0].value
        await this.setState({[name]:value})
        console.log(this.state)
    }

    onSwitchChange = async (value) => {
        console.log(value)
        await this.setState({form: value})
        console.log(this.state)
    }

    onCheckboxChange = async (event) =>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(name, value)
        await this.setState({[name]: value});
        console.log(this.state)
    }

    onRadioChange = async (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(name, value)
        console.log(target)
        await this.setState({[name]: value});
        console.log(this.state)
    }


    onSelectChange =  async ({name, value}) => {
        await console.log("onSelectChange: ", name, value)
        await this.setState({[name]: value});
        await console.log("onSelectChange: ", this.state)
    }

    countInterests = () => {
        let count = this.state.interest_science +
            this.state.interest_selfdevelopment +
            this.state.interest_professional +
            this.state.interest_work +
            this.state.interest_organization +
            this.state.interest_sport +
            this.state.interest_cybersport +
            this.state.interest_art +
            this.state.interest_media +
            this.state.interest_politics +
            this.state.interest_travel +
            this.state.interest_languages +
            this.state.interest_psychology +
            this.state.interest_squad +
            this.state.interest_volunteer +
            this.state.interest_boardgames +
            this.state.interest_entertainment;
        console.log(count)
        return count
    }

    // const [fetchedUser, setUser] = useState(null);
    // const [popout, setPopout] = useState();

    render() {

        return (
            <FormLayout>
                <FormItem top="Кто ты в РТУ МИРЭА?">
                    <Checkbox checked={this.state.is_student} name='is_student' onChange={this.onCheckboxChange}>Студент(-ка)</Checkbox>
                    <Checkbox checked={this.state.is_worker} name='is_worker' onChange={this.onCheckboxChange}>Сотрудник(-ца)</Checkbox>
                    <Checkbox checked={this.state.is_graduated} name='is_graduated' onChange={this.onCheckboxChange}>Выпускник(-ца)</Checkbox>
                    <Checkbox checked={this.state.is_outsider} name='is_outsider' onChange={this.onCheckboxChange}>Не причастен(-на) к РТУ МИРЭА</Checkbox>
                </FormItem>

                {/*value={this.state.is_student}*/}

                {(this.state.is_student || this.state.is_graduated) &&
                <FormItem top="Какой институт?">
                    <Select value={this.state.institution}  name = "institution" onChange={this.onSelectChange} >
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
                        {this.state.is_graduated &&
                        <option value="Другой">Другой</option>}
                    </Select>
                </FormItem>}

                {(this.state.is_student || this.state.is_graduated) && (this.state.institution !== 'Колледж') &&
                <FormItem  top = {this.state.is_graduated ? "Что закончил(-а) в РТУ МИРЭА?" : "Какой уровень образования?"}>
                    <Select value={this.state.level}  name = "level" onChange={this.onSelectChange} >
                        <option value="Бакалавриат">Бакалавриат</option>
                        <option value="Специалитет">Специалитет</option>
                        <option value="Магистратура">Магистратура</option>
                        <option value="Аспирантура">Аспирантура</option>
                    </Select>
                </FormItem>}

                {this.state.is_student &&
                <FormItem top="Какой курс?">
                    <Select value={this.state.grade.toString()} name = "grade" onChange={this.onSelectChange} >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                    </Select>
                </FormItem>}

                {this.state.is_student &&
                <FormItem top="Какая форма?">
                    <SliderSwitch
                        activeValue={this.state.form}
                        name = "form"
                        onSwitch = {this.onSwitchChange}
                        options={[
                            {name: 'Бюджетная', value: 'Бюджетная'},
                            {name: 'Платная', value: 'Платная'}]}
                    />
                </FormItem>}


                {this.state.is_student &&
                <FormItem top="Номер группы?" >
                    <Input
                        value = {this.state.group}
                        onChange = {this.onInputChange}
                        name = "group"
                        placeholder="ИКБО-01-19"/>
                </FormItem>}

                <Separator style={{ margin: '12px 0' }} />

                <FormItem top="Согласен(-на) получать важные объявления? Приказы, собрания и т.п.">
                    <Radio name="send_important"
                           checked = {this.state.send_important}
                           // onChange = {this.onRadioChange}
                           value = "Да"
                           required>
                        Да</Radio>
                </FormItem>

                <FormItem top="Какие социальные темы тебе интересны?">
                    <Checkbox checked={this.state.social_news} name='social_news' onChange={this.onCheckboxChange}>
                        Новости о жизни Университета</Checkbox>
                    <Checkbox checked={this.state.social_scholarships} name='social_scholarships' onChange={this.onCheckboxChange}>
                        Стипендии</Checkbox>
                    <Checkbox checked={this.state.social_dormitory} name='social_dormitory' onChange={this.onCheckboxChange}>
                        Общежития</Checkbox>
                    <Checkbox checked={this.state.social_blood} name='social_blood' onChange={this.onCheckboxChange}>
                        Донорство</Checkbox>
                    <Checkbox checked={this.state.social_mobility} name='social_mobility' onChange={this.onCheckboxChange}>
                        Академическая мобильность: учёба заграницей и т.п.</Checkbox>
                </FormItem>

                <FormItem top="Какая внеучебная деятельность тебе интересна?">
                    <Checkbox checked={this.state.interest_science} name='interest_science' onChange={this.onCheckboxChange}>
                        Наука</Checkbox>
                    <Checkbox checked={this.state.interest_selfdevelopment} name='interest_selfdevelopment' onChange={this.onCheckboxChange}>
                        Саморазвитие: soft навыки</Checkbox>
                    <Checkbox checked={this.state.interest_professional} name='interest_professional' onChange={this.onCheckboxChange}>
                        Профессиональное развитие по специальности</Checkbox>
                    <Checkbox checked={this.state.interest_work} name='interest_work' onChange={this.onCheckboxChange}>
                        Работа и стажировки</Checkbox>
                    <Checkbox checked={this.state.interest_organization} name='interest_organization' onChange={this.onCheckboxChange}>
                        Организация мероприятий</Checkbox>
                    <Checkbox checked={this.state.interest_sport} name='interest_sport' onChange={this.onCheckboxChange}>
                        Спорт</Checkbox>
                    <Checkbox checked={this.state.interest_cybersport} name='interest_cybersport' onChange={this.onCheckboxChange}>
                        Киберспорт</Checkbox>
                    <Checkbox checked={this.state.interest_art} name='interest_art' onChange={this.onCheckboxChange}>
                        Творчество</Checkbox>
                    <Checkbox checked={this.state.interest_media} name='interest_media' onChange={this.onCheckboxChange}>
                        Медиа: фото, видео, текст, дизайн</Checkbox>
                    <Checkbox checked={this.state.interest_politics} name='interest_politics' onChange={this.onCheckboxChange}>
                        Политика</Checkbox>
                    <Checkbox checked={this.state.interest_travel} name='interest_travel' onChange={this.onCheckboxChange}>
                        Путешествия</Checkbox>
                    <Checkbox checked={this.state.interest_languages} name='interest_languages' onChange={this.onCheckboxChange}>
                        Изучение иностранных языков</Checkbox>
                    <Checkbox checked={this.state.interest_psychology} name='interest_psychology' onChange={this.onCheckboxChange}>
                        Психология</Checkbox>
                    <Checkbox checked={this.state.interest_squad} name='interest_squad' onChange={this.onCheckboxChange}>
                        Отряды: педагогические, профориентационный, МЧС</Checkbox>
                    <Checkbox checked={this.state.interest_volunteer} name='interest_volunteer' onChange={this.onCheckboxChange}>
                        Волонтёрство</Checkbox>
                    <Checkbox checked={this.state.interest_boardgames} name='interest_boardgames' onChange={this.onCheckboxChange}>
                        Настольные игры</Checkbox>
                    <Checkbox checked={this.state.interest_entertainment} name='interest_entertainment' onChange={this.onCheckboxChange}>
                        Досуг и развлечения</Checkbox>
                </FormItem>

                {this.countInterests() !== 0 &&
                <FormItem top="Кратко, есть ли и какие достижения у тебя в выбранных выше сферах?" >
                    <Textarea
                        value = {this.state.achievements}
                        onChange = {this.onInputChange}
                        name = "achievements"/>
                </FormItem>}

                {(this.state.interest_science || this.state.interest_professional) &&
                <FormItem top="Какие форматы Научной и Профессиональной деятельности тебе интересны?">
                    <Checkbox checked={this.state.science_conferences} name='science_conferences' onChange={this.onCheckboxChange}>
                        Конференции и форумы</Checkbox>
                    <Checkbox checked={this.state.science_competitions} name='science_competitions' onChange={this.onCheckboxChange}>
                        Хакатоны, олимпиады и иные соревнования</Checkbox>
                    <Checkbox checked={this.state.science_teaching} name='science_teaching' onChange={this.onCheckboxChange}>
                        Преподавать другим</Checkbox>
                    <Checkbox checked={this.state.science_business} name='science_business' onChange={this.onCheckboxChange}>
                        Предпринимательство, бизнес и ведение проектов</Checkbox>
                    <Checkbox checked={this.state.science_materials} name='science_materials' onChange={this.onCheckboxChange}>
                        Профессиональные учебные материалы</Checkbox>
                    <Checkbox checked={this.state.science_pop} name='science_pop' onChange={this.onCheckboxChange}>
                        Научно-популярные материалы</Checkbox>
                </FormItem>}

                <FormItem top="Есть ли ещё какие сферы, тебе интересные?" >
                    <Textarea
                        value = {this.state.another_interests}
                        onChange = {this.onInputChange}
                        name = "another_interests"/>
                </FormItem>

                <Separator style={{ margin: '12px 0' }} />

                <FormItem>
                    <InfoRow header={""}>
                        Важные оповещения будут приходить ежедневно в 20:00 по Москве.
                    </InfoRow>
                </FormItem>

                <FormItem top="А как часто тебе будет удобно получать рассылку по своим интересам?">
                    <Radio
                        checked = {this.state.frequency.toString() === '7'}
                        onChange = {this.onRadioChange}
                        name="frequency" value={7}>
                        Каждый день</Radio>
                    <Radio
                        checked = {this.state.frequency.toString() === '3'}
                        onChange = {this.onRadioChange}
                        name="frequency" value={3}>
                        Каждые два дня</Radio>
                    <Radio
                        checked = {this.state.frequency.toString() === '1'}
                        onChange = {this.onRadioChange}
                        name="frequency" value={1}>
                        Раз в неделю по ...</Radio>
                </FormItem>

                {this.state.frequency.toString() === '1' &&
                <FormItem>
                    <Select
                        value={this.state.week_day.toString()}
                        name = "week_day" onChange={this.onSelectChange} >
                            <option value={1}>понедельникам</option>
                            <option value={2}>вторникам</option>
                            <option value={3}>средам</option>
                            <option value={4}>четвергам</option>
                            <option value={5}>пятницам</option>
                            <option value={6}>субботам</option>
                            <option value={7}>воскресеньям</option>
                    </Select>
                </FormItem>}

                <FormItem  top={"И в какое время?"} >
                    <Select value={this.state.time}  name = "time" onChange={this.onSelectChange}>
                        <option value={8}>8:30</option>
                        <option value={12}>12:30</option>
                        <option value={18}>18:00</option>
                        <option value={22} >22:00</option>
                    </Select>
                </FormItem>


                <FormItem>
                    <Button stretched mode="commerce">Сохранить</Button>
                </FormItem>

            {/*    добавить всплывающую подсказку после кнопки*/}
            </FormLayout>
        );
    }
}
export default MineForm;