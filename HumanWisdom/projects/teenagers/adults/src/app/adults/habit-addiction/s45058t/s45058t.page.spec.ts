import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45058tPage } from './s45058t.page';

describe('S45058tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45058tPage;
  let fixture: ComponentFixture<S45058tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45058tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45058tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
