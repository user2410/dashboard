import { List, Datagrid, TextField, Edit, SimpleForm, EditButton, TextInput, Create } from 'react-admin';

export function listUsers(props) {
	return (
		<List {...props}>
			<Datagrid>
				<TextField source='name' />
				<TextField source='company' />
				<EditButton basePath='/users' />
			</Datagrid>
		</List>
	);
}

export function editUser(props){
	return(
		<Edit {...props}>
			<SimpleForm>
				<TextInput source='name'/>
				<TextInput source='company'/>
			</SimpleForm>
		</Edit>
	)
}

export function createUser(props){
	return(
		<Create {...props}>
			<SimpleForm>
				<TextInput source='name'/>
				<TextInput source='company'/>
			</SimpleForm>
		</Create>
	);
}