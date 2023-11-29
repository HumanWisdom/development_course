import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132080tPage } from './s132080t.page';

describe('S132080tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132080tPage;
  let fixture: ComponentFixture<S132080tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132080tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132080tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
