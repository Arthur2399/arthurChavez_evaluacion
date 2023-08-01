import { Layout, UsersPage } from './module';
import { AppTheme } from './theme';

export const App = () => {
    return (
        <AppTheme>
            <Layout>
                <UsersPage/>
            </Layout>
        </AppTheme>
    )
}
