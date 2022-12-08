import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64010tPage } from './s64010t.page';

describe('S64010tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64010tPage;
  let fixture: ComponentFixture<S64010tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64010tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64010tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
