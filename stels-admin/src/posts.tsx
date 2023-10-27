import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput,

} from "react-admin";
export const PostList = () => (
    <List>
        <Datagrid>
        <TextField source="id" />
        <ReferenceField source="userId" reference="users" link="show" />             <TextField source="title" />
             <EditButton />
        </Datagrid>
    </List>
);


const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};


export const PostEdit = () => (
    <Edit title={<PostTitle />}>
        <SimpleForm>
        <TextInput source="id" disabled />
            <ReferenceInput source="userId" reference="users" />
            
            <TextInput source="title" />
           
        </SimpleForm>
    </Edit>
);
export const PostCreate = () => (
  <Create>
    <SimpleForm>
    <ReferenceInput source="userId" reference="users" />
    <TextInput source="title" />
    <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users">
    <TextInput source="name" />
  </ReferenceInput>
];