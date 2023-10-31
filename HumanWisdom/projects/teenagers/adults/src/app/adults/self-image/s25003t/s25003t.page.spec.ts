import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25003tPage } from './s25003t.page';

describe('S25003tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25003tPage;
  let fixture: ComponentFixture<S25003tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25003tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25003tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
