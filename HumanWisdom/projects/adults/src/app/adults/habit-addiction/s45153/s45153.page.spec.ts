import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45153Page } from './s45153.page';

describe('S45153Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45153Page;
  let fixture: ComponentFixture<S45153Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45153Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45153Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
