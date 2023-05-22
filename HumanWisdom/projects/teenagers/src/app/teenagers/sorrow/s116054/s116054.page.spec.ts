import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116054Page } from './s116054.page';

describe('S116054Page', () => {
      
    let component:  S116054Page;
  let fixture: ComponentFixture<S116054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
