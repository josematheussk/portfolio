interface IProps {
  title: string;
  description: string;
  project_image: any;
  pagelink?: string;
  repolink: string;
}

export default function ProjectModel(props: IProps): JSX.Element {
  const { title, description, project_image, pagelink, repolink } = props;
  return (
    <div className="projectm-container">
      <p id="projectm-title">{title}</p>
      <div className="projectm-wrapper">
        <img src={project_image} id="projectm-img" />
        <div className="projectm-text-button">
          <p id="projectm-description">{description}</p>
          <div className="card-link">
            {pagelink === undefined ? null : (
              <a href={pagelink}>
                <div className="visit">Visitar página</div>
              </a>
            )}
            <a href={repolink}>
              <div className="repo">Repositório</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
