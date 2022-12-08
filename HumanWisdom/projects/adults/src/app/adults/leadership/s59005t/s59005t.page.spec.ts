import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59005tPage } from './s59005t.page';

describe('S59005tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59005tPage;
  let fixture: ComponentFixture<S59005tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59005tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59005tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
