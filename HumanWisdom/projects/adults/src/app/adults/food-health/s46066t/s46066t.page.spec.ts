import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46066tPage } from './s46066t.page';

describe('S46066tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46066tPage;
  let fixture: ComponentFixture<S46066tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46066tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46066tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
