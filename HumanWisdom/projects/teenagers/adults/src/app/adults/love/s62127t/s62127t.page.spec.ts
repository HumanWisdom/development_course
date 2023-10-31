import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62127tPage } from './s62127t.page';

describe('S62127tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62127tPage;
  let fixture: ComponentFixture<S62127tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62127tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62127tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
