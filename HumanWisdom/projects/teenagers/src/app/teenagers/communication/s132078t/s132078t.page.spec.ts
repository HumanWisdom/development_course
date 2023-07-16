import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132078tPage } from './s132078t.page';

describe('S132078tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132078tPage;
  let fixture: ComponentFixture<S132078tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132078tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132078tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
