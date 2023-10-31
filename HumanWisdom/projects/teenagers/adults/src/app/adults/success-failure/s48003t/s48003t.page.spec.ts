import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48003tPage } from './s48003t.page';

describe('S48003tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48003tPage;
  let fixture: ComponentFixture<S48003tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48003tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48003tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
