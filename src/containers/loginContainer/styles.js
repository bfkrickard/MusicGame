export default {
  main: {
    flex:1, 
    // justifyContent: 'center',
    padding: 30
  },
  header: {
    main: {},
    title: {
      fontSize: 30,
      textAlign: 'center',
      paddingBottom: 40
    },
  },
  content: {
    main: {
      flex:1,
      justifyContent: 'center'
    },
    input: {
      marginVertical: 20
    },
    button: {
      main: {
        width: 500,
        maxWidth: '90%',
        alignSelf: 'center'
      },
      contentStyle: {
        height: 50,
      }
    }
  }
}