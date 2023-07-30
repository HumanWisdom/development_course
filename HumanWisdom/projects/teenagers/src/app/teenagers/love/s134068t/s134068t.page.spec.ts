import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134068tPage } from './s134068t.page';

describe('S134068tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134068tPage;
  let fixture: ComponentFixture<S134068tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134068tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134068tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
