import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S58026Page } from './s58026.page';

describe('S58026Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S58026Page;
  let fixture: ComponentFixture<S58026Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S58026Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S58026Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
