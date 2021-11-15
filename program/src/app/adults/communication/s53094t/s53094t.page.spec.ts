import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53094tPage } from './s53094t.page';

describe('S53094tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53094tPage;
  let fixture: ComponentFixture<S53094tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53094tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53094tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
