import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132104tPage } from './s132104t.page';

describe('S132104tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132104tPage;
  let fixture: ComponentFixture<S132104tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132104tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132104tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
