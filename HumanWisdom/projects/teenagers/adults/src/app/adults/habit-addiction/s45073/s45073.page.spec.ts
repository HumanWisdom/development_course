import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45073Page } from './s45073.page';

describe('S45073Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45073Page;
  let fixture: ComponentFixture<S45073Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45073Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45073Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
