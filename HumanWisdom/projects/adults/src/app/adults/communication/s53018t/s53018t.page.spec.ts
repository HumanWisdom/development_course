import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53018tPage } from './s53018t.page';

describe('S53018tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53018tPage;
  let fixture: ComponentFixture<S53018tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53018tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53018tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
