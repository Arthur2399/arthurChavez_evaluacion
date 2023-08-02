import { Layout, UsersPage } from './module';
import { AppTheme } from './theme';

export const App = () => {
    return (
        <AppTheme> {/* The theme controls the colors and fonts  */}
            <Layout>  {/* The layout controls the search, header and footer */}
                <UsersPage/>  {/* The users page control userCards and pagination */}
            </Layout>
        </AppTheme>
    )
}
