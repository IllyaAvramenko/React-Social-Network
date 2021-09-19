import { connect } from 'react-redux';
import { sendMessage } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
};

const DialogsContainer = compose(
    connect(mapStateToProps, { sendMessage }),
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;


// const AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, 
//     { updateNewMessageBody, sendMessage })(AuthRedirectComponent);


// DialogsContainer - контейнерна компонента, яка повертає Презентаційну компоненту та передає у неї інформацію про store через props
// Тому, що Презентаційна компонента не "Знає" про store, а тільки має приймати інформацію, яка приходить до неї через props

// У mapStateToProps приходить State
// У mapDispatchToProps приходить Dispatch

// В props Dialogs попадуть обєкти, які повертають два callback (mapStateToProps та mapDispatchToProps)
// Тобто в Dialogs props будуть props.dialogsPage / props.mapStateToProps / props.mapDispatchToProps