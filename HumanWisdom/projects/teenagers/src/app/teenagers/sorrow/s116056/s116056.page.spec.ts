import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116056Page } from './s116056.page';

describe('S116056Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116056Page;
  let fixture: ComponentFixture<S116056Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116056Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116056Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
