import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49007Page } from './s49007.page';

describe('S49007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49007Page;
  let fixture: ComponentFixture<S49007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
