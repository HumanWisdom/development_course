import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48092Page } from './s48092.page';

describe('S48092Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48092Page;
  let fixture: ComponentFixture<S48092Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48092Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48092Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
