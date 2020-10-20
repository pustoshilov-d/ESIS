import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './other/Home';
import Persik from './other/Persik';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import SimpleCell from "@vkontakte/vkui/dist/components/Cell/Cell";
import List from "@vkontakte/vkui/dist/components/List/List";
import Switch from "@vkontakte/vkui/dist/components/Switch/Switch";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import InfoRow from "@vkontakte/vkui/dist/components/InfoRow/InfoRow";
import Tooltip from "@vkontakte/vkui/dist/components/Tooltip/Tooltip";
import Separator from "@vkontakte/vkui/dist/components/Separator/Separator";
import MineForm from './elements/MineForm';

import "./App.css"
import "../node_modules/react-widgets/dist/css/react-widgets.css"
import {FormItem} from "@vkontakte/vkui";
import Snackbar from "@vkontakte/vkui/dist/components/Snackbar/Snackbar";

const App = () => {
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [deleteAlert, setDeleteAlert] = useState(null)

	//
	// constructor() {
	// 	this.state = {
	// 		activePanel: 'list',
	// 		removeList: ['Михаил Андриевский', 'Вадим Дорохов', 'Саша Колобов'],
	// 		draggingList: ['Say', 'Hello', 'To', 'My', 'Little', 'Friend']
	// 	};
	// }

	useEffect(() => {
		setPopout(null);
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
		}
		fetchData();
	}, []);

	const openBase = () => {
		if (this.state.snackbar) return;
		this.setState({ snackbar:
				<Snackbar
					layout="vertical"
					onClose={() => this.setState({ snackbar: null })}
					before={<Avatar size={24} style={blueBackground}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
				>
					Уведомления о подкастах включены
				</Snackbar>
		});
	}

	return (
		<View activePanel='main' popout={popout}>
			<Panel id="main">
				<PanelHeader>
					Настройка Рассылки
				</PanelHeader>

				{fetchedUser &&
				<Group title="User Data Fetched with VK Bridge">
					<Cell
						before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
						// description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
						description={"ID: "+ fetchedUser.id}
					>
						{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
					</Cell>
				</Group>}

				<MineForm/>
				<Div>
					<Button stretched mode="destructive">Отписаться</Button>
				</Div>
			</Panel>

		</View>
	);
}

export default App;

