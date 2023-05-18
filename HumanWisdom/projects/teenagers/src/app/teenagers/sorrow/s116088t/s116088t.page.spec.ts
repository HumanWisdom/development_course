import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116088tPage } from './s116088t.page';

describe('S116088tPage', () => {
      
    let component:  S116088tPage;
  let fixture: ComponentFixture<S116088tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116088tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116088tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
