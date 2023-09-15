import MainHeader from '../components/shared/layout/MainHeader'
import { Container, Stack, Typography, styled } from '@mui/material';
import Image from '../components/shared/image';
import { useParams } from 'react-router-dom';


function Blog() {
    const { id } = useParams();
    
    // const { state }: { state: get_post } = useLocation()
  
    return (
        <MainHeader heroTitle={null} shouldFitImageToHeader={false} >
            <Stack component={'main'}>
                <StyledContainer maxWidth='lg'>
                    <BlogImage
                        src={"https://ruchita-blog.s3.ap-south-1.amazonaws.com/6d83b57720d4f246fff07a34a4ded997c9fa46789c35c46e58d26aed06e0d30a?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIARAFJVBMA6RRYSCNO%2F20230912%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230912T141904Z&X-Amz-Expires=400&X-Amz-Signature=fdd1e75e85a6ea97234f295005bc333592b5472f1a3376c7e01288ef6e64aae0&X-Amz-SignedHeaders=host&x-id=GetObject"}
                        title=''
                    />
                    <Title>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, fuga saepe 
                    </Title>
                    <Description>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta id voluptatum esse. Ab nulla a nisi, mollitia praesentium nostrum, possimus doloribus dicta quos voluptas porro quisquam alias enim amet odio?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, rerum enim laborum sed consequatur expedita officiis obcaecati, hic necessitatibus quod illo. Dolorem error modi quam ea! Similique explicabo consequatur tenetur. Enim, nesciunt! Exercitationem expedita aut enim, odio libero earum adipisci voluptatem molestiae quam. Autem, recusandae id. Libero eaque quis fugiat ipsa natus quas nisi laboriosam possimus fugit cumque, dolor velit, hic nesciunt ab enim architecto expedita magnam similique, error aut explicabo in laborum? Vitae assumenda consectetur ducimus libero excepturi distinctio magni tenetur dolorum ea hic deserunt minus repellendus nam sunt laboriosam adipisci ipsa veniam cumque itaque nobis incidunt, corrupti temporibus. Blanditiis dignissimos deserunt quae iusto atque dolore, similique dicta nisi quo obcaecati. Minus quis doloribus architecto libero iure rerum ratione repudiandae nostrum consectetur, delectus blanditiis cupiditate natus aliquid impedit. Voluptatem ut aliquid ullam porro minus, obcaecati cum asperiores magnam nobis mollitia ipsam dicta, commodi inventore modi vero delectus iusto. Ea, ex veritatis rerum, soluta similique ab animi quas adipisci impedit ipsa non eum dolor iusto sunt culpa dolorem distinctio rem et? Officiis adipisci tenetur, delectus voluptates neque aut illo error iure reprehenderit optio soluta consequatur? Saepe soluta dignissimos optio facilis impedit esse, itaque similique, est reprehenderit illo iste corrupti dolore atque doloremque nostrum. Molestiae quos cupiditate ducimus corrupti architecto sunt incidunt iste? Doloribus qui pariatur, quidem quo magnam voluptatibus consectetur saepe esse voluptas nobis nihil? Amet reiciendis alias fugiat eligendi, officia voluptas quae recusandae dolores culpa maxime rerum voluptatibus. Itaque suscipit dolorem provident odio possimus sapiente laudantium voluptates, reiciendis iusto aut magni recusandae ratione nesciunt perspiciatis ullam sit tempore perferendis fuga assumenda? Quasi placeat quam cupiditate fugit temporibus. Dolor quas deleniti asperiores quam quis inventore cupiditate ullam iusto labore. Eligendi, repudiandae perferendis ut praesentium quasi aperiam tempora, cum, consequuntur vero eius vitae! Quaerat rerum sequi quae mollitia, ex neque fugit. Enim similique cupiditate aliquam pariatur numquam ratione ut libero beatae consequuntur repudiandae itaque explicabo optio expedita totam sint nobis iste quo asperiores autem, quos molestias dolorem eligendi accusantium? Et possimus consectetur perspiciatis inventore, illum nulla quaerat ipsam nihil iusto atque, repudiandae eligendi ratione placeat omnis? Soluta a, suscipit iusto possimus officia cupiditate totam ex. Quisquam fugiat eligendi impedit repudiandae aut? Debitis modi facilis repellat! Minima obcaecati iusto eos, repellendus asperiores rerum voluptatibus nemo voluptatum unde officiis, recusandae magni tempore, nobis voluptas dignissimos mollitia enim quis deserunt! Dolores fugit quibusdam obcaecati soluta quas perferendis, ea reprehenderit earum. Dicta magnam molestiae autem ad odio? Beatae, neque aperiam! Adipisci nam, praesentium architecto a est porro, officia at mollitia, aut deleniti consequatur. Dolores, aliquid nisi eum deleniti eligendi sapiente cupiditate. Enim iusto, necessitatibus ipsum et beatae nam dolorem inventore accusantium ipsa porro, quis nulla nobis numquam temporibus impedit ab ratione aspernatur magni eligendi quidem repellat. Ab, dolorem explicabo consequuntur eveniet reprehenderit totam omnis quos? Iure, facilis doloribus. A at quam asperiores beatae harum et reiciendis aut esse molestias. Voluptate aut cupiditate incidunt beatae dicta voluptatibus officia molestias asperiores amet aspernatur eaque impedit ipsam itaque aliquam id quo quis, deserunt libero, voluptas fuga nihil ipsa.
                    </Description>
                </StyledContainer>
            </Stack>
        </MainHeader>
    )
}

export default Blog

const StyledContainer = styled(Container)(({ theme }) => ({
    marginTop: '1rem',
    marginBottom: '1rem'
}))

const BlogImage = styled(Image)(({ theme }) => ({
    height: '70vh',
    [theme.breakpoints.down('md')]: {
        height: 'fit-content',
    },
    objectFit: 'contain',
    borderRadius: '8px'
}))



const Title = styled(Typography)(({ theme }) => ({
    fontSize: '3rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '2.2rem'
    },
    marginTop: '1rem',
    textAlign: 'center',
    textTransform: 'uppercase'
}))


const Description = styled(Typography)(() => ({
    fontSize: '1rem',
    marginTop: '2rem',
    textAlign: 'left',

}))