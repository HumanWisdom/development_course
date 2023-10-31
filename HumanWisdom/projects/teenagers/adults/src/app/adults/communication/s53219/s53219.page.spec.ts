import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53219Page } from './s53219.page';

describe('S53219Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53219Page;
  let fixture: ComponentFixture<S53219Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53219Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53219Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
