import { Admin, Resource } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'

import AdminPanel from './components/AdminPanel.js'
import { listProducts, editProduct, createProduct } from './components/Products.js'
import { listUsers, editUser, createUser } from './components/Users.js'

function App() {
	return (
		<div className='App'>
			<Admin dashboard={AdminPanel} dataProvider={simpleRestProvider('http://localhost:3000')}>
				<Resource
					name='products'
					list={listProducts}
					edit={editProduct}
					create={createProduct}
				/>
				<Resource
					name='users'
					list={listUsers}
					edit={editUser}
					create={createUser}
				/>
			</Admin>
		</div>
	);
}

export default App;
