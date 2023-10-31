import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53035tPage } from './s53035t.page';

describe('S53035tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53035tPage;
  let fixture: ComponentFixture<S53035tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53035tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53035tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
