
    
import HTML from 'react-native-render-html';

const homeIndex = function(props) {
    return (
        <View style={props.styles.container}>
              {_.isEmpty(props.listItem) ? <Text style={props.styles.instruction}>Press the button to decide what to do:</Text> : props.choosing ? <Text style={props.styles.instruction}>Deciding...</Text> : <Text style={props.styles.instruction}>Do this:</Text>}
              {_.isEmpty(props.listItem) ? <Button title="Make a Decision" onPress={props._onPressDecideButton}></Button> : <HTML tagsStyles={{p: props.styles.dothis}} html={props.content} />}
              {(!_.isEmpty(props.listItem) && !props.choosing) ? <Button title="Pick Something Else" onPress={props._onPressDecideButton}></Button> : null}
        </View>
      );
}

export default homeIndex;