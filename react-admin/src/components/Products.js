import { List, Datagrid, TextField, Edit, SimpleForm, EditButton, TextInput, Create } from 'react-admin';

export function listProducts(props) {
	return (
		<List {...props}>
			<Datagrid>
				<TextField source='id' />
				<TextField source='name' />
				<TextField source='brand' />
				<TextField source='price' />
				<EditButton basePath='/products' />
			</Datagrid>
		</List>
	);
}

export function editProduct(props){
	return(
		<Edit {...props}>
			<SimpleForm>
				<TextInput source='name'/>
				<TextInput source='brand'/>
				<TextInput source='price'/>
			</SimpleForm>
		</Edit>
	)
}

export function createProduct(props){
	return(
		<Create {...props}>
			<SimpleForm>
				<TextInput source='name'/>
				<TextInput source='brand'/>
				<TextInput source='price'/>
			</SimpleForm>
		</Create>
	);
}