import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117073Page } from './s117073.page';

describe('S117073Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117073Page;
  let fixture: ComponentFixture<S117073Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117073Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117073Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
