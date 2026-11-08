ALTER TABLE public.board
    ADD COLUMN IF NOT EXISTS file_name varchar(255),
    ADD COLUMN IF NOT EXISTS file_type varchar(255),
    ADD COLUMN IF NOT EXISTS file_data bytea;

COMMENT ON COLUMN public.board.file_name IS '첨부파일 원본 이름';
COMMENT ON COLUMN public.board.file_type IS '첨부파일 MIME 타입';
COMMENT ON COLUMN public.board.file_data IS '첨부파일 바이너리 데이터';
