import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45003tPage } from './s45003t.page';

describe('S45003tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45003tPage;
  let fixture: ComponentFixture<S45003tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45003tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45003tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
