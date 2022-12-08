import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61027tPage } from './s61027t.page';

describe('S61027tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61027tPage;
  let fixture: ComponentFixture<S61027tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61027tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61027tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
