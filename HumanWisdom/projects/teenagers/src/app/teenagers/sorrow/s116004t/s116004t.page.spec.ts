import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116004tPage } from './s116004t.page';

describe('S116004tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116004tPage;
  let fixture: ComponentFixture<S116004tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116004tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116004tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
