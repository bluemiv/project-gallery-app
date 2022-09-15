import InnerHomeMenu from './HomeMenu';
import Button from './Button';

type InnerHomeMenuType = typeof InnerHomeMenu;

interface HomeMenuInterface extends InnerHomeMenuType {
  Button: typeof Button;
}

const HomeMenu = InnerHomeMenu as HomeMenuInterface;
HomeMenu.Button = Button;

export default HomeMenu;
