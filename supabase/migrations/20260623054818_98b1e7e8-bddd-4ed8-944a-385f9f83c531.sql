
CREATE POLICY "portfolio-media public read" ON storage.objects FOR SELECT
  USING (bucket_id = 'portfolio-media');
CREATE POLICY "portfolio-media admin write" ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'portfolio-media' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "portfolio-media admin update" ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'portfolio-media' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "portfolio-media admin delete" ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'portfolio-media' AND public.has_role(auth.uid(), 'admin'));
