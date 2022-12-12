import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45068tPage } from './s45068t.page';

describe('S45068tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45068tPage;
  let fixture: ComponentFixture<S45068tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45068tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45068tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
