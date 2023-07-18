import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132205tPage } from './s132205t.page';

describe('S132205tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132205tPage;
  let fixture: ComponentFixture<S132205tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132205tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132205tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
