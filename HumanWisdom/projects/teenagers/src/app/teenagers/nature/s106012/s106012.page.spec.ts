import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S106012Page } from './s106012.page';

describe('S106012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S106012Page;
  let fixture: ComponentFixture<S106012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S106012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S106012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
