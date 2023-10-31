import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53142Page } from './s53142.page';

describe('S53142Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53142Page;
  let fixture: ComponentFixture<S53142Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53142Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53142Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
